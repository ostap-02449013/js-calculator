insert = num => document.form.textview.value += num;
equal = () => document.form.textview.value = eval(document.form.textview.value);
clean = () => document.form.textview.value = '';
back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}