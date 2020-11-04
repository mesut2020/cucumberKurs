package ApachePOI;

import org.apache.poi.ss.usermodel.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class _06_GetColumnAllData {
    public static List<String> getColumnList(int columnNo) {
        List<String> listCol = new ArrayList<>();

        String path = "src/main/resources/LoginData.xlsx";
        FileInputStream inputStream = null;
        Workbook workbook = null;
        try {
            inputStream = new FileInputStream(path);
            workbook = WorkbookFactory.create(inputStream);
        } catch (Exception e) {
            e.printStackTrace();
        }

        Sheet sheet = workbook.getSheet("Login");

        int rowCount = sheet.getPhysicalNumberOfRows();

        for (int i = 0; i < rowCount; i++) {
            Row row = sheet.getRow(i);

            int colCount = row.getPhysicalNumberOfCells();

            if(colCount>columnNo){
            //if(row.getCell(columnNo)!=null){
                Cell cell = row.getCell(columnNo);
                listCol.add(cell.toString());
            }
        }
        System.out.println();

        return listCol;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Column no: ");
        int columnNo = sc.nextInt();

        System.out.println(getColumnList(columnNo));

    }
}
