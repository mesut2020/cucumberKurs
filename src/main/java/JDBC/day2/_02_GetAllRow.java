package jdbc.day2;

import jdbc._Parent;
import org.testng.annotations.Test;

import java.sql.ResultSet;
import java.sql.SQLException;

public class _02_GetAllRow extends _Parent {

    @Test
    public void test1() throws SQLException {
        ResultSet rs = statement.executeQuery("SELECT * FROM customer");

        int countRow = 0;
        System.out.printf("%-4s%-15s%-10s%-4s\n", "id" , "first_name" , "last_name" , "rs.getRow()");
        while (rs.next()) {
            int id = rs.getInt("customer_id");
            String firstName = rs.getString("first_name");
            String lastName = rs.getString("last_name");

            System.out.printf("%-4s%-15s%-15s%-4s\n", id , firstName , lastName , rs.getRow());

            countRow++;
        }
        System.out.println("number of row: " + countRow);
        rs.last();
        System.out.println("getRow: " + rs.getRow());
    }

    // yukaridaki ornegi for dongusu ile yapiniz
    @Test
    public void test2() throws SQLException {
        ResultSet rs = statement.executeQuery("SELECT * FROM customer");

        System.out.printf("%-4s%-15s%-15s%-4s\n", "id" , "first_name" , "last_name" , "rs.getRow()");
        int i = 1;
        rs.last();
        int rowCount = rs.getRow();
        for (; i<=rowCount ; i++) {
            rs.absolute(i);
            int id = rs.getInt("customer_id");
            String firstName = rs.getString("first_name");
            String lastName = rs.getString("last_name");

            System.out.printf("%-4s%-15s%-15s%-4s\n", id , firstName , lastName , rs.getRow());

        }
        System.out.println("number of row: " + (i-1));

        //        for (int i = 1; i <= rowCount; i++) {
//            rs.absolute(i);
//            String firstName = rs.getString("first_name");
//            String lastName = rs.getString("last_name");
//
//            //System.out.println(firstName + " -- " + lastName + " -- "+ rs.getRow());
//            System.out.printf("%-15s %-15s %-4d\n", firstName, lastName, rs.getRow());
//        }


//        for (int i = rowCount; i > 0; i--) { // sondan başa doğru
//            String firstName = rs.getString("first_name");
//            String lastName = rs.getString("last_name");
//
//            //System.out.println(firstName + " -- " + lastName + " -- "+ rs.getRow());
//            System.out.printf("%-15s %-15s %-4d\n", firstName, lastName, rs.getRow());
//
//            rs.next();
//        }

    }


}
