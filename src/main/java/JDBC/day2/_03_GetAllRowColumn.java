package jdbc.day2;

import jdbc._Parent;
import org.testng.annotations.Test;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

public class _03_GetAllRowColumn extends _Parent {

    @Test
    public void test1() throws SQLException {

        ResultSet rs = statement.executeQuery("SELECT * FROM language");

        ResultSetMetaData rsmd = rs.getMetaData();  // sorgu listesine iliskin temel bilgilere ulasbiliyoruz

        System.out.println(rs.getMetaData().getCatalogName(1)); // sakila
        System.out.println(rs.getMetaData().getColumnClassName(1)); // java.lang.Integer
        System.out.println(rs.getMetaData().getColumnDisplaySize(1)); // 3
        System.out.println(rs.getMetaData().getColumnLabel(1)); // language_id
        System.out.println(rs.getMetaData().getColumnName(1)); // language_id
        System.out.println(rs.getMetaData().getColumnType(1)); // -6
        System.out.println(rs.getMetaData().getColumnTypeName(1)); // TINYINT UNSIGNED
        System.out.println(rs.getMetaData().getPrecision(1)); //3
        System.out.println(rs.getMetaData().getSchemaName(1)); //
        System.out.println(rs.getMetaData().getTableName(1)); // language

        int columnCount = rsmd.getColumnCount();
        System.out.println(columnCount);

        while (rs.next()) {

            for (int i = 1; i <= columnCount; i++) {
                System.out.print(rs.getString(i) + "    ");
            }
            System.out.println();
        }
    }

    // Task1 : film tablosundaki butun bilgileri listeleyiniz...
    @Test
    public void task1() throws SQLException {

        ResultSet rs = statement.executeQuery("SELECT * FROM film");

        ResultSetMetaData rsmd = rs.getMetaData();  // sorgu listesine iliskin temel bilgilere ulasbiliyoruz

        int columnCount = rsmd.getColumnCount();
        System.out.println(columnCount);
        for (int i = 1; i <= columnCount; i++) {
            System.out.print(rsmd.getColumnLabel(i) + "    ");
        }

        while (rs.next()) {

            for (int i = 1; i <= columnCount; i++) {
                System.out.print(rs.getString(i) + "    ");
            }
            System.out.println();
        }
    }

    // Task1 : film tablosundaki butun bilgileri DUZENLI listeleyiniz...
    @Test
    public void task2() throws SQLException {
        ResultSet rs = statement.executeQuery("SELECT * FROM film");

        ResultSetMetaData rsmd = rs.getMetaData();  // sorgu listesine iliskin temel bilgilere ulasbiliyoruz

        int columnCount = rsmd.getColumnCount();
        System.out.println(columnCount);
        for (int i = 1; i <= columnCount; i++) {
            System.out.printf("%-15s ", rsmd.getColumnLabel(i) + "    ");  // prints column name
        }
        System.out.println();

        while (rs.next()) {

            for (int i = 1; i <= columnCount; i++) {
                String tempStr = rs.getString(i);
                if(tempStr.length()>15) tempStr = tempStr.substring(0, 15);     // CALISMADI
                System.out.printf("%-15s ", tempStr);
            }
            System.out.println();
        }
    }
}


/*
*  String sql = "select * from actor;";
        ResultSet rs = mysql.getResults(sql);
        ResultSetMetaData rsMD = rs.getMetaData();

        int rowCount = rsMD.getColumnCount();

        while (rs.next()) {
            for (int i = 1; i < rowCount; i++) {
                String strf = "%-" + rsMD.getColumnDisplaySize(i)+ "s" ;
                System.out.printf(strf, rs.getString(i));
            }
            System.out.println();
        }
        *
        * */





