package myServlets;

import myBeanComponent.Data;
import myTools.Storage;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.stream.Collectors;

@WebServlet(name = "ControllerServlet", value = "/ctrl-sev")
public class ControllerServlet extends HttpServlet {
    private Storage storage;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect("index.jsp");

    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ServletContext context = request.getServletContext();

        if (storage == null){
            storage = new Storage();
            storage.setList(new LinkedList<>());
            context.setAttribute("list", storage.getList());
            context.setAttribute("storage", storage);
        }

        if (request.getParameter("old") != null){
            request.getRequestDispatcher("/data-servlet").forward(request, response);
            return;
        }

        request.getRequestDispatcher("/area-check").forward(request,response);


    }

}
