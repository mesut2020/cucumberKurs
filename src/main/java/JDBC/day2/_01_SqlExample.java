package jdbc.day2;

import jdbc._Parent;
import org.testng.annotations.Test;

import java.sql.ResultSet;
import java.sql.SQLException;

public class _01_SqlExample extends _Parent {

    @Test
    public void relativeExample() throws SQLException {

        ResultSet rs = statement.executeQuery("SELECT * FROM city");

        rs.relative(5);
        String cityName = rs.getString(2);
        System.out.println(cityName);

        rs.relative(5);
        cityName = rs.getString(2);
        System.out.println(cityName);
    }

    @Test
    public void lastFirstKeyword() throws SQLException {
        ResultSet rs = statement.executeQuery("SELECT * FROM city");

        rs.last();   // goes to last row
        String cityName = rs.getString("city");
        int cityId = rs.getInt("city_id");
        System.out.println(cityId + " --- " + cityName);

        rs.first();   // goes to last row
        cityName = rs.getString("city");
        cityId = rs.getInt("city_id");
        System.out.println(cityId + " --- " + cityName);
    }

    // Adresteki district alanini once 10. satirdakini, sonra 22. satirdaki, sonra en son satirdaki bilgisini yazdiriniz...

    @Test
    public void task1() throws SQLException {
        ResultSet rs = statement.executeQuery("SELECT district FROM address");

        rs.absolute(10);
        System.out.println(rs.getString("district"));

        rs.relative(12);
        System.out.println(rs.getString("district"));

        rs.last();
        System.out.println(rs.getString("district"));
    }


}
