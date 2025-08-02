(function(){
    const textFields = document.querySelectorAll('text-field');
    for(let textField of textFields){
        const input = document.createElement('input');
        input.type = 'text';
        input.name = textField.getAttribute('name');
        input.required = textField.getAttribute('required');
        textField.appendChild(input);
    }

    const selects = document.querySelectorAll('fl-select');

    for(let select of selects){
        select.setAttribute('tabindex', '0');
        const firstOption = select.querySelector('fl-option');
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = select.getAttribute('name');
        input.required = select.getAttribute('required');
        input.value = firstOption.getAttribute('value');
        select.parentElement.insertBefore(input, select);

        const selected = document.createElement('span');
        selected.appendChild(document.createTextNode(firstOption.textContent));
        select.insertBefore(selected, select.firstElementChild);
        //select.setAttribute('selected', firstOption.textContent);

        select.onclick = function(e){
            if(e.target.tagName == 'FL-OPTION'){
                input.value = e.target.getAttribute('value');
                select.value = e.target.getAttribute('value');
                selected.textContent = e.target.textContent;
                //select.setAttribute('selected', e.target.textContent);
                select.dispatchEvent(new Event('change'));
                select.blur();
                return;
            }
            select.focus();
        };
    }
})();

function createTextField(data){
    const textField = document.createElement('text-field');
    textField.setAttribute('label', data.label);
    textField.setAttribute('name', data.name);

    const input = document.createElement('input');
    input.type = 'text';
    input.name = data.name;
    if(data.required){
        textField.setAttribute('required', data.required);
        input.required = data.required;
    }

    textField.appendChild(input);

    return textField;
}
