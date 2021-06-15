function reply_click(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    var useless = ['=', 'C', 'R'];
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var symbol = ['+', '-', '*', '/']
    var display = document.getElementById("display");
    var num1 = "";
    var num2 = "";

    if (e.nodeName === 'BUTTON') {
        if (!useless.includes(e.value)) {
            console.log(e.value);
            display.innerHTML += e.value;
        } else {
            console.log("wait");
            if (e.value == 'R')
                display.innerHTML = "";
            else if (e.value == 'C') {
                var n = display.innerHTML.length;
                display.innerHTML = display.innerHTML.slice(0, n - 1);

            } else {
                console.log("Done");
                let complete = display.innerHTML;
                let s = "";
                let sc = 0
                for (let x of complete) {
                    let y = symbol.includes(x);
                    if (!y) {
                        if (sc == 0)
                            num1 += x;
                        else
                            num2 += x;
                    } else if (y) {
                        if (sc == 0) {
                            sc = 1;
                        } else {
                            switch (s) {
                                case '+':
                                    num1 = String(parseFloat(num1) + parseFloat(num2));
                                    num2 = "";
                                    break;
                                case '-':
                                    num1 = String(parseFloat(num1) - parseFloat(num2));
                                    num2 = "";
                                    break;
                                case '*':
                                    num1 = String(parseFloat(num1) * parseFloat(num2));
                                    num2 = "";
                                    break;
                                case '/':
                                    num1 = String(parseFloat(num1) / parseFloat(num2));
                                    num2 = "";
                                    break;
                                default:
                                    break;
                            }
                        }
                        s = x;
                    }
                }
                switch (s) {
                    case '+':
                        num1 = String(parseFloat(num1) + parseFloat(num2));
                        num2 = "";
                        break;
                    case '-':
                        num1 = String(parseFloat(num1) - parseFloat(num2));
                        num2 = "";
                        break;
                    case '*':
                        num1 = String(parseFloat(num1) * parseFloat(num2));
                        num2 = "";
                        break;
                    case '/':
                        num1 = String(parseFloat(num1) / parseFloat(num2));
                        num2 = "";
                        break;
                    default:
                        break;
                }
                display.innerHTML = num1;
            }
        }
    }
}
