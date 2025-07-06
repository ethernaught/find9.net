const fs = require('fs');
const path = require('path');

exports.post = async (req, res) => {
    //VERIFY ITS A DEB FILE (DONT META CHECK)

    //return res.status(400).send('Must upload a .deb file');

    const dest = path.join(REPO_ROOT, 'pool', 'main', req.file.originalname);

    await fs.promises.rename(req.file.path, destPath);

    // regenerate metadata
    try {
        await regenerateMetadata();
        res.send('Package uploaded and repo metadata updated!');
    } catch (err) {
        next(err);
    }
};

async function regenerateMetadata() {
    const dist = 'focal';
    const component = 'main';
    const archs = ['amd64','arm64'];
    const distsPath = path.join(REPO_ROOT,'dists', dist, component);

    // For each arch, rebuild Packages.gz
    for (const arch of archs) {
        const pkgDir = path.join(REPO_ROOT, 'pool', 'main');
        const outDir = path.join(distsPath, `binary-${arch}`);
        await fs.promises.mkdir(outDir, { recursive: true });

        await run('dpkg-scanpackages', [ pkgDir, '/dev/null' ], {
            stdout: fs.createWriteStream(path.join(outDir, 'Packages.gz')),
            stdio: ['ignore','pipe','inherit']
        });
    }

    // Write Release
    const releasePath = path.join(REPO_ROOT,'dists',dist,'Release');
    const releaseContent = [
        `Origin: YourName`,
        `Label: YourRepo`,
        `Suite: ${dist}`,
        `Codename: ${dist}`,
        `Date: ${new Date().toUTCString()}`,
        `Architectures: ${archs.join(' ')}`,
        `Components: ${component}`,
        `Description: My custom APT repo`,
    ].join('\n') + '\n';
    await fs.promises.writeFile(releasePath, releaseContent);

    // Sign Release
    await run('gpg', [
        '--default-key', 'YOUR-KEY-ID',
        '--output', path.join(REPO_ROOT,'dists',dist,'Release.gpg'),
        '--detach-sign',
        releasePath
    ]);
}

function run(cmd, args, opts = {}) {
    return new Promise((resolve, reject) => {
        const p = spawn(cmd, args, opts);
        p.on('error', reject);
        p.on('close', code => code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`)));
    });
}
