class Animal {
    void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}

public class Test {
    public static void main(String[] args) {
        new Animal().makeSound();
        new Dog().makeSound();
    }
}
