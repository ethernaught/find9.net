(function(){
    const selects = document.querySelectorAll('fl-select');

    for(let s of selects){
        s.setAttribute('tabindex', '0');
        const firstOption = s.querySelector('fl-option');
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = s.getAttribute('name', s.name);
        input.value = firstOption.getAttribute('value');
        s.parentElement.insertBefore(input, s);

        s.setAttribute('label', firstOption.textContent);
        s.onclick = function(e){
            if(e.target.tagName == 'FL-OPTION'){
                input.value = e.target.getAttribute('value');
                s.value = e.target.getAttribute('value');
                s.setAttribute('label', e.target.textContent);
                s.dispatchEvent(new Event('change'));
                s.blur();
                return;
            }
            s.focus();
        };
    }
})();