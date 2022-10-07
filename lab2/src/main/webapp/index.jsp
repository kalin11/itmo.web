<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>lab №2</title>
    <script defer src="${pageContext.request.contextPath}/js/jQuery-3.6.1.js"></script>
    <script
            src="https://code.jquery.com/jquery-3.6.1.js"
            integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
            crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src = "${pageContext.request.contextPath}/js/updater.js"></script>
</head>
<body>
<style>
    /*селектор элементов*/
    *{
        font-family: Candara,fantasy;
    }
    html, body{
        height: 100%;
    }
    body{
        align-items: center;
        background: #71b7e6;
    }
    /*селектор потомств*/
    input, select{
        border: none;
        background: #f2f2f2;
        font-size: 15px;
        padding: 12px;
        border-radius: 3px;
        outline: none;
    }

</style>
<h1>
    <style>
        h1{
            text-align: center;
            color: #000000;
            font-size: 50px;
            font-family: cursive;
        }
        h1::first-letter{
            color: #FE6262;
        }
    </style>
    Лысенко Артём Константинович, P32312, вариант 3231206
</h1>
<section>
    <form class = "js-form" id = "form" action="${pageContext.request.contextPath}/ctrl-sev" method="POST" onsubmit="return validateForm();">
        <table id = 'myTable'>
            <style>
                table{
                    width: 100%;
                    height: 150px;
                    max-width: 1024px;
                    margin: auto;
                    background-color: aliceblue;
                    text-align: center;
                }
            </style>
            <tbody>
            <script>
                function validateForm(){
                    let formInputs = document.querySelector(".js-input");
                    let y = formInputs.value;
                    let parsed = parseFloat(y.replace(',', '.'));

                    let flag1 = false;
                    let flag2 = false;

                    let checkBoxes = document.getElementsByClassName("checkbox");
                    for (let i = 0; i < checkBoxes.length; i++){
                        if (checkBoxes[i].checked){
                            flag1 = true;
                        }
                    }

                    if (!flag1){
                        new swal({title: "не прикалывайся надо мной",
                            text: "Выбери радиус, потом тыкай, балбес",
                            icon: "warning"});
                    }


                    if (!isNaN(parsed)){
                        if (parsed > -3 && parsed < 5){
                            flag2 = true;
                        }
                        else {
                            formInputs.style.background = "#FE6262"
                        }
                    }
                    else {
                        formInputs.style.background = "#FE6262"
                    }

                    return flag1 && flag2;

                }
            </script>
            <tr>
                <td>Выберите у
                    <input type="text" class = "js-input" id = "y" name = "yCoord" maxlength="4" placeholder="введите значение (-3;5)" oninput="validation()" required>
                    <style>
                        /*селектор псевдоэлемента*/
                        .js-input::placeholder{
                            font-style: italic;
                        }
                    </style>
                    <script type="text/javascript">
                        function validation(){
                            let input = document.querySelector(".js-input");
                            let y = input.value;
                            let regex = "^(\\-|\\+)?\\d+(\\,|.\\d+)?$";

                            if (y === ''){
                                input.style.background = "";
                            }
                            else {
                                if (!y.match(regex)) {
                                    input.style.background = "#FE6262";
                                } else {
                                    input.style.background = "#F2F2F2";
                                }
                            }
                        }
                    </script>
                </td>
                <td>Выберите х
                    <select name = "xCoord" id = "xCoord">
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">&nbsp0</option>
                        <option value="1">&nbsp1</option>
                        <option value="2">&nbsp2</option>
                        <option value="3">&nbsp3</option>
                        <option value="4">&nbsp4</option>
                        <option value="5">&nbsp5</option>
                    </select>
                </td>
                <td>Выберите радиус (обязательно хотя бы один)<br>
                    <style>
                        .container {
                            position: relative;
                            padding-left: 35px;
                            margin-bottom: 12px;
                            cursor: pointer;
                            font-size: 15px;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                        }

                        /* Hide the browser's default checkbox */
                        .container input {
                            position: absolute;
                            opacity: 0;
                            cursor: pointer;
                            height: 0;
                            width: 0;
                        }

                        /* Create a custom checkbox */
                        .checkmark {
                            position: absolute;
                            top: 0;
                            left: 0;
                            height: 25px;
                            width: 25px;
                            background-color: #eee;
                        }

                        /* On mouse-over, add a grey background color */
                        .container:hover input ~ .checkmark {
                            background-color: #ccc;
                        }

                        /* When the checkbox is checked, add a blue background */
                        .container input:checked ~ .checkmark {
                            background-color: #2196F3;
                        }

                        /* Create the checkmark/indicator (hidden when not checked) */
                        .checkmark:after {
                            content: "";
                            position: absolute;
                            display: none;
                        }

                        /* Show the checkmark when checked */
                        .container input:checked ~ .checkmark:after {
                            display: block;
                        }

                        /* Style the checkmark/indicator */
                        .container .checkmark:after {
                            left: 9px;
                            top: 5px;
                            width: 5px;
                            height: 10px;
                            border: solid white;
                            border-width: 0 3px 3px 0;
                            -webkit-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                            transform: rotate(45deg);
                        }
                    </style>
                    <label class="container"> 1
                        <input type = "checkbox" class = "checkbox" name="Radius" value="1" >
                        <span class = "checkmark"></span>
                    </label>
                    <label class="container"> 1.5
                        <input type = "checkbox" class = "checkbox" name="Radius" value="1.5" >
                        <span class = "checkmark"></span>
                    </label>
                    <label class="container"> 2
                        <input type = "checkbox" class = "checkbox" name="Radius" value="2" >
                        <span class = "checkmark"></span>
                    </label>
                    <label class="container"> 2.5
                        <input type = "checkbox" class = "checkbox" name="Radius" value="2.5" >
                        <span class = "checkmark"></span>
                    </label>
                    <label class="container"> 3
                        <input type = "checkbox" class = "checkbox" name="Radius" value="3">
                        <span class = "checkmark"></span>
                    </label>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <input class = "submit" type="submit" id = "submit" name = "submitButton" placeholder="Отправить" formtarget="_self">
                    <style>
                        /*селектор псевдоклассов*/
                        .submit:hover{
                            background-color: #b3ff6b;
                            transition: .7s;
                        }
                    </style>
                    <input class = "reset" type="reset" id = "reset" name = "resetButton" placeholder="Сбросить">
                    <style>
                        .reset:hover{
                            background-color: #FE6262;
                            transition: .7s;
                        }
                    </style>
                </td>
            </tr>

            </tbody>
            <tr>
                <td style="line-height: 100px;"  colspan = 3>&nbsp</td>
            </tr>

            <tr>
                <td style = "font-size: 30px; text-align: center" colspan="3">График</td>
            </tr>

            <tr>
                <td style="line-height: 80px;"  colspan = 3>&nbsp</td>
            </tr>

            <tr>
                <td colspan="3">
                    <canvas id = "canvas" width="400" height="400">
                        <script src = "${pageContext.request.contextPath}/js/graph.js"></script>
                    </canvas>
                </td>

            </tr>
        </table>
    </form>
    <div>
    </div>
</section>
</body>
</html>
