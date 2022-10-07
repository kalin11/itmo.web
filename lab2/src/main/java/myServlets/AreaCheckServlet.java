package myServlets;

import myBeanComponent.Data;
import myTools.AreaHitChecker;
import myTools.Storage;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

@WebServlet(name = "AreaCheckServlet", value = "/area-check")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect("index.jsp");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Double x = getX(request);
        Double y = getY(request);
        Double[] radii = getRadii(request);

        long start = System.nanoTime();

        Storage storage = (Storage) getServletContext().getAttribute("storage");


        AreaHitChecker checker = new AreaHitChecker(x, y, radii);

        for (Double radius : radii) {
            Data data = new Data();
            data.setY(y);
            data.setX(x);
            data.setRadius(new Double[]{radius});
            data.setHitted(checker.wasHitted(x, y, radius));
            data.setDate(new Date());
            data.setTime(System.nanoTime() - start);
            storage.add(data);
        }

        response.sendRedirect("answer.jsp");

    }


    public Double getX(HttpServletRequest request){
        return Double.parseDouble(request.getParameter("xCoord"));
    }

    public Double getY(HttpServletRequest request){
        return Double.parseDouble(request.getParameter("yCoord").replace(",","."));
    }

    public Double[] getRadii(HttpServletRequest request){
        String radius = Arrays.toString(request.getParameterValues("Radius"));
        String array = radius.substring(1, radius.length()-1);
        String[] arr = array.split(", ");
        Double[] dr = new Double[arr.length];
        for (int i = 0; i < arr.length; i++){
            dr[i] = Double.parseDouble(arr[i]);
        }
        return dr;
    }

}
