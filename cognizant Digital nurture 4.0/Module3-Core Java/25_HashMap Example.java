import java.util.HashMap;
import java.util.Scanner;

public class StudentMap {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        Scanner sc = new Scanner(System.in);
        map.put(1, "Alice");
        map.put(2, "Bob");
        System.out.print("Enter ID: ");
        int id = sc.nextInt();
        System.out.println("Student: " + map.getOrDefault(id, "Not Found"));
    }
}
