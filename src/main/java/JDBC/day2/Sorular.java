package jdbc.day2;

import jdbc._Parent;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Sorular extends _Parent {

    ResultSet resultSet;

    @Test
    public void soru3() throws SQLException {
         resultSet = statement.executeQuery("SELECT * FROM company.countries");

        while (resultSet.next()) {
            for (int i = 0; i < 10; i++) {
                String country_name = resultSet.getString("COUNTRY_NAME");
                if (country_name.contains("E") || country_name.contains("e"))
                    System.out.println(country_name.toUpperCase());

            }
        }
    }

    //ülkelerin içerisinden son harfi A ile bitenleri bulun. Bunu yazdırın ve Assert ile test edin.
    @Test
    public void soru4() throws SQLException {
         resultSet = statement.executeQuery("SELECT * FROM company.countries WHERE COUNTRY_NAME LIKE '%a'");

        while (resultSet.next()) {
            for (int i = 0; i < 10; i++) {
                String country_name = resultSet.getString("COUNTRY_NAME");
                    System.out.println(country_name);
                Assert.assertEquals(country_name.substring(country_name.length()-1),"a");
            }
        }
    }
}
