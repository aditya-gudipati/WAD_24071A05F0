import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class Test extends HttpServlet
{
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws IOException, ServletException
    {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String marksParam = request.getParameter("marks");
        int marks = Integer.parseInt(marksParam);

        String grade, message;

        if (marks >= 90 && marks <= 100) {
            grade   = "A+";
            message = "Outstanding!";
        } else if (marks >= 80) {
            grade   = "A";
            message = "Excellent!";
        } else if (marks >= 70) {
            grade   = "B";
            message = "Very Good!";
        } else if (marks >= 60) {
            grade   = "C";
            message = "Good.";
        } else if (marks >= 50) {
            grade   = "D";
            message = "Average.";
        } else if (marks >= 35) {
            grade   = "E";
            message = "Pass.";
        } else {
            grade   = "F";
            message = "Fail.";
        }

        out.println("<html><body>");
        out.println("Marks: " + marks + "<br>");
        out.println("Grade: " + grade + "<br>");
        out.println("Result: " + message + "<br><br><br>");
        out.println("<center><b><font size='6'>@24071A05F0</font></b></center>");
        out.println("</body></html>");

        out.close();
    }
}