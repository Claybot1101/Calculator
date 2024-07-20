function chMode() {
            mode.className == 'fa-solid fa-sun'?
            mode.className = 'fa-solid fa-moon':
            mode.className = 'fa-solid fa-sun';

            let body = document.querySelector('body');
            mode.classList.contains('fa-sun') ?
            body.setAttribute('data-theme', 'dark') :
            body.setAttribute('data-theme', 'light') ;
        }
        function calc() {
            var replaced = res.value;
            if (res.value.includes('÷') || res.value.includes('×')) {
                replaced = res.value.replaceAll('×', '*').replaceAll('÷', '/');
                res.value = eval(replaced);
            }
            res.value = eval(replaced);
        }
