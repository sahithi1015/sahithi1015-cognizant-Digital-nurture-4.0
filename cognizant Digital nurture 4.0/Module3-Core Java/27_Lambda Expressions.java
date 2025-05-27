import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Mango");
        list.sort((a, b) -> a.compareToIgnoreCase(b));
        System.out.println(list);
    }
}
