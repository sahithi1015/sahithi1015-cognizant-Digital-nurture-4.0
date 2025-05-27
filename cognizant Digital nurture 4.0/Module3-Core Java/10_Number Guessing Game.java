import java.util.Scanner;
import java.util.Random;

public class NumberGuessing {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rand = new Random();
        int number = rand.nextInt(100) + 1;
        int guess = 0;
        while (guess != number) {
            System.out.print("Guess the number: ");
            guess = sc.nextInt();
            if (guess < number) System.out.println("Too low");
            else if (guess > number) System.out.println("Too high");
            else System.out.println("Correct!");
        }
    }
}
