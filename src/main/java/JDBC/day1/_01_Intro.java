package jdbc.day1;

import org.testng.annotations.Test;

import java.sql.*;


public class _01_Intro {

    @Test
    public void test1() throws SQLException {

        String url = "jdbc:mysql://test.medis.mersys.io:33306/sakila";
        // Veritabanına ulaşabilmek için JDBC ye : db nini tipi (mysql), db nin yolu (test.medis.mersys.io)
        // db nin bulunduğu bilgisayarın içindeki mysql db nin port numarası (33306) ve db nin adı verildi.
        String username = "technostudy";
        String password = "zhTPis0l9#$&";

        Connection connection = DriverManager.getConnection(url, username, password); //  baglanti saglandi
        Statement statement = connection.createStatement(); // sorgularimi calsitirabilmek icin bir yol olustur

        ResultSet rs = statement.executeQuery("SELECT * FROM actor"); // Sonuclar rs degiskenine set edildi
        // fakat performans icin butun sonuclar bir anda rs ye aktariliyor. biz komut verdikce satir satir gelecek

        rs.next(); // gostergeyi sonraki adima getir, orada satir varsa, butun satiri rs ye at.
        String firstName = rs.getString("first_name");
        System.out.println(firstName);
        String lastName  = rs.getString("last_name");
        System.out.println(lastName);

        rs.next(); // gostergeyi sonraki adima getir, orada satir varsa, butun satiri rs ye at.
        firstName = rs.getString("first_name");
        System.out.println(firstName);
        lastName  = rs.getString("last_name");
        System.out.println(lastName);

        connection.close();

    }
}
