<%@ page import="myBeanComponent.Data" %>
<%@ page import="java.util.*" %>
<%@ page import="myTools.Storage" %>
<%@ page import="myTools.AreaHitChecker" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.text.DateFormat" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>lab №1</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
</head>
<body>

<style>
    *{
        font-family: Candara,fantasy;
    }
    body{
        height: 100vh;
        align-items: center;
        /*background: linear-gradient(135deg, #71b7e6, #9b59b6);*/
        background: #71b7e6;
    }
    .clear{
        align-items: center;
        justify-content: center;
        align-content: center;
    }
</style>
<h1>
    <style>
        h1, .container{
            text-align: center;
            color: #000000;
            font-size: 50px;
            font-family: cursive;
        }
        h1::first-letter{
            color: #FE6262;
        }
        .link{
            text-align: center;
            align-content: center;
            font-size: 20px;
        }
    </style>
    Результат
    <script>
        function displayTime(){
            let dateTime = new Date();
            let hrs = dateTime.getHours();
            let min = dateTime.getMinutes();
            let sec = dateTime.getSeconds();

            hrs = ("0" + hrs).slice(-2);
            min = ("0" + min).slice(-2);
            sec = ("0" + sec).slice(-2);

            document.getElementById("hours").innerHTML = hrs;
            document.getElementById("min").innerHTML = min;
            document.getElementById("sec").innerHTML = sec;
        }
        setInterval(displayTime, 10);
    </script>
    <br>
</h1>
<div class="container">
    <span id = "hours">00</span>
    <span>:</span>
    <span id = "min">00</span>
    <span>:</span>
    <span id = "sec">00</span>
</div>

<table id="table">
    <style>
        table{
            width: 100%;
            height: 150px;
            max-width: 800px;
            margin: auto;
            background-color: aliceblue;
            text-align: center;
        }
        tr:nth-child(odd){
            background-color: #eee;
        }
    </style>
    <br>
    <thead>
    <tr>
        <th> <h2>Х</h2></th>
        <th> <h2>Y</h2></th>
        <th> <h2>R</h2></th>
        <th> <h2>Попадание</h2></th>
        <th> <h2>Время проверки</h2></th>
        <th> <h2>Время отправки</h2></th>

    </tr>
    </thead>
    <jsp:useBean id="storage" class="myTools.Storage"/>
    <jsp:setProperty name="storage" property="list" value="<%=request.getServletContext().getAttribute(\"list\") %>"/>


    <% for (int i = storage.size() - 1; i >= 0; i--){    %>
    <tr>
        <td> <% out.println(String.format("%.1f",storage.get(i).getX())); %> </td>
        <td> <% out.println(String.format("%.1f",storage.get(i).getY())); %> </td>
        <td> <% out.println(Arrays.toString(storage.get(i).getRadius()).replace("[", "").replace("]", "")); %> </td>
        <%  %>
        <td> <%
            if (storage.get(i).isHitted()) {out.println("попал");}
            else out.println("не попал");

        %> </td>
        <td> <% out.println(storage.get(i).getTime() / 1000 + " мкс"); %> </td>
        <td> <%
            out.println(new SimpleDateFormat("HH:mm:ss").format(storage.get(i).getDate()));
        %></td>
    </tr>
    <%
        }
    %>

</table>
<div class="link">
    <a href="index.jsp">Вернуться назад</a>
</div>

<div class="container">
    <input type="button" id = "button" class="clear" value="очистить таблицу" onclick="">
</div>

</body>

</html>
