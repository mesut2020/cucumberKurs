package ApachePOI;

import org.apache.poi.ss.usermodel.*;

import java.io.FileInputStream;
import java.util.Scanner;

public class _05_GetASpecificData {

    public static String getDataFromExcel(String text) {
        String result = "";
        String path = "src/main/resources/LoginData.xlsx";
        FileInputStream inputStream = null;
        Workbook workbook=null;
        try {
            inputStream = new FileInputStream(path);
            workbook = WorkbookFactory.create(inputStream);
        } catch (Exception e) {
            e.printStackTrace();
        }

        Sheet sheet = workbook.getSheet("Login");
        int rowCount = sheet.getPhysicalNumberOfRows();

        for (int i = 0; i < rowCount; i++) {
            if (sheet.getRow(i).getCell(0).toString().equalsIgnoreCase(text)) {
                int cellCount = sheet.getRow(i).getPhysicalNumberOfCells();

                for (int j = 1; j < cellCount; j++) {
                    result += sheet.getRow(i).getCell(j).toString() + " ";
                }
                break;
            }
        }

//        for(int i=0;i<rowCount ;i++) // satır sayısı kadar dönecek
//        {
//            Row row=sheet.getRow(i); // i.Satır alındı
//            int cellCount = row.getPhysicalNumberOfCells(); // bu satırdaki toplam hücre sayısı alındı.
//
//            for(int j=0;j< cellCount;j++ ) // i.satırdaki hucre sayısı kadar dönecek
//            {
//                Cell cell = row.getCell(j); // bu satırdaki sıradaki hücreyi aldım.
//                if(cell.getStringCellValue().equalsIgnoreCase(text)) {
//                    result = row.getCell(j + 1);break;
//                } else break;
//            }
//        }
        return result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String text = sc.nextLine();

        System.out.println(getDataFromExcel(text));

    }
}
