package jdbc.day1;

import org.testng.annotations.*;

import java.sql.*;

public class _02_BeforeAfter {
    Connection connection;
    Statement statement;

    @BeforeTest
    public void beforeTest() throws SQLException {
        String url = "jdbc:mysql://test.medis.mersys.io:33306/sakila";
        // Veritabanına ulaşabilmek için JDBC ye : db nini tipi (mysql), db nin yolu (test.medis.mersys.io)
        // db nin bulunduğu bilgisayarın içindeki mysql db nin port numarası (33306) ve db nin adı verildi.
        String username = "technostudy";
        String password = "zhTPis0l9#$&";

        connection = DriverManager.getConnection(url, username, password); //  baglanti saglandi
        statement = connection.createStatement(); // sorgularimi calsitirabilmek icin bir yol olustur
    }

    @AfterTest
    public void afterTest() throws SQLException {
        connection.close();
    }

    @Test
    public void test1() throws SQLException {

        ResultSet rs =  statement.executeQuery("SELECT * FROM language");

        rs.next();
        String name = rs.getString("name");
        System.out.println(name);

        rs.next();
        name = rs.getString("name");
        System.out.println(name);

        rs.next();
        name = rs.getString("name");
        System.out.println(name);
    }

    @Test
    public void test2() throws SQLException {

        ResultSet rs =  statement.executeQuery("SELECT * FROM language");
        // indexler 1 den basliyor. column adi yerine index no kullanilabilir.
        rs.next();
        String name = rs.getString(2);  // 2. siradaki column i secer
        System.out.println(name);

        rs.next();
        name = rs.getString(2);
        System.out.println(name);

        rs.next();
        name = rs.getString(2);
        System.out.println(name);
    }

    @Test
    public void test3() throws SQLException {

        ResultSet rs =  statement.executeQuery("SELECT * FROM language");

        rs.next();
        String name = rs.getString(2);
        System.out.println(name);

        rs.next();
        name = rs.getString(2);
        System.out.println(name);

        rs.previous();
        name = rs.getString(2);
        System.out.println(name);
    }

}
