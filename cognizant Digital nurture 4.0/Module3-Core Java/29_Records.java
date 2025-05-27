import java.util.*;
import java.util.stream.*;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 30),
            new Person("Bob", 25),
            new Person("Charlie", 20)
        );
        people.stream()
              .filter(p -> p.age() >= 25)
              .forEach(System.out::println);
    }
}
