document.addEventListener('DOMContentLoaded', function() {
    let all = document.querySelector('#all');
    let prem = document.querySelector('#prem');
    let d1n = document.querySelector('#d1n');
    let d1s = document.querySelector('#d1s');
    all.style.backgroundColor = '#50dc50';

    all.addEventListener('click', function(){
        make_active(all);
        hide_rows("all");
    });

    prem.addEventListener('click', function(){
        make_active(prem);
        hide_rows("#premrow");
    });

    d1n.addEventListener('click', function(){
        make_active(d1n);
        hide_rows("#d1nrow");
    });

    d1s.addEventListener('click', function(){
        make_active(d1s);
        hide_rows("#d1srow");
    });

    function make_active(active_button){
        buttons = [all, prem, d1n, d1s];
        buttons.forEach((button) => button.style.backgroundColor = '#E3E3E3');
        active_button.style.backgroundColor = '#50dc50';
    }

    function hide_rows(active_rows){
        rows = document.querySelectorAll("tr");
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = 'none';
        }
        document.querySelector("#fixed").style.display = 'table-row';

        if (active_rows == "all") {
            rows = document.querySelectorAll("tr");
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.display = 'table-row';
            }
            return;
        } else {
            rows = document.querySelectorAll(active_rows);
            for (let i = 0; i < rows.length; i++) {
                rows[i].style.display = 'table-row';
            }
            return;
        }
    }
  });

