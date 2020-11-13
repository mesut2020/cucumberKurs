package jdbc.day2;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

//verilen bir db ye ait sorgunun sonucunu bir liste atarak geri döndüren metodu yazınız.
// URL,username,password, db, sql  parametre olarak alacak

public class _04_ReusableMethods {
    static Statement statement;

    public static void connectToDataBase(String url, String db, String username, String password) throws SQLException {
        url = url + db;
        Connection connection = DriverManager.getConnection(url, username, password); //  baglanti saglandi
        statement = connection.createStatement();
    }


    public static List<List<String>> getList(String sql) throws SQLException {

        List<List<String>> lst = new ArrayList<>();
        ResultSet rs = statement.executeQuery(sql);

        ResultSetMetaData rsmd = rs.getMetaData();
        int columnCount = rsmd.getColumnCount();
        System.out.println("columnCount :" + columnCount);

        while (rs.next()) {
            List<String> lst1 = new ArrayList<>();
            for (int i = 1; i <= columnCount; i++)
                lst1.add(rs.getString(i));
            lst.add(lst1);
        }
        return lst;
    }

    public static void printList(List<List<String>> list) {

        for (List<String> li : list) {
            System.out.println(li);
        }
    }

    public static void main(String[] args) throws SQLException {
// URL,username,password, db, sql  parametre olarak alacak
        String url = "jdbc:mysql://test.medis.mersys.io:33306/";
        String db = "sakila";
        String username = "technostudy";
        String password = "zhTPis0l9#$&";
        String sql = "SELECT * FROM language";

        connectToDataBase(url, db, username, password);

        List<List<String>> list = getList(sql);

        printList(list);

    }
}
