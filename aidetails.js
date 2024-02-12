function editText() {
    var textElement = document.getElementById('text');
    var button = document.getElementById('edit-button');

    if (button.textContent === 'Edit') {
        var textarea = document.createElement('textarea');
        textarea.id = 'textarea';
        textarea.className = 'mt-4.5 text-sm font-normal w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary';
        textarea.style.resize = 'none'; // Disable manual resize
        textarea.style.whiteSpace = 'pre-wrap'; // Preserve line breaks and spaces
        textarea.value = textElement.textContent;
        textElement.parentNode.replaceChild(textarea, textElement);
        button.textContent = 'Save';
    } else {
        var p = document.createElement('p');
        p.id = 'text';
        p.className = 'mt-4.5 text-sm font-normal';
        p.textContent = document.getElementById('textarea').value;
        document.getElementById('textarea').parentNode.replaceChild(p, document.getElementById('textarea'));
        button.textContent = 'Edit';
    }
}