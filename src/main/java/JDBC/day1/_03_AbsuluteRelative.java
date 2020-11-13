package jdbc.day1;

import jdbc._Parent;
import org.testng.annotations.Test;

import java.sql.ResultSet;
import java.sql.SQLException;

public class _03_AbsuluteRelative extends _Parent {
   @Test
    public void test1() throws SQLException {
       ResultSet rs = statement.executeQuery("SELECT * FROM film");

       rs.absolute(10); // 10. satira git
       String title = rs.getString("title");
       System.out.println(title);

       rs.absolute(15); // 15. satira git
       title = rs.getString("title");
       System.out.println(title);

       rs.relative(10); // en son bulundugu yerden 10 satir ilerler yani 15. satirda ise 25. satira gider.
       title = rs.getString("title");
       System.out.println(title);

       rs.relative(-10); // negatif sayilarda geri gider. yani 25. satirda ise 15. satira gider.
       title = rs.getString("title");
       System.out.println(title);

   }
}
