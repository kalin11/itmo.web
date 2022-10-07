package myServlets;

import myBeanComponent.Data;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedList;

@WebServlet(name = "dataServlet", value = "/data-servlet")
public class SendDataServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        response.sendRedirect("index.jsp");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        StringBuilder dataResponse = new StringBuilder();
        LinkedList<Data> dataList = (LinkedList<Data>) request.getServletContext().getAttribute("list");
        for (Data i : dataList){
            dataResponse.append(i.getX()).append(" ").append(i.getY()).append(" ").append(Arrays.toString(i.getRadius()).replace("[","").replace("]","")).append("\n");
        }
        response.getWriter().println(dataResponse);
    }
}