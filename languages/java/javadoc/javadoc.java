/**
 * This is a random Java class.
 */
public class RandomClass {

    /**
     * This is a random method that prints "Hello, world!".
     * Some more docs
     */
    public void sayHello() {
        System.out.println("Hello, world!");
    }

    /**
     * This method calculates the factorial of a given number.
     *
     * @param n The number 
     * @return The factorial of the given number.
     */
    public int factorial(int n) {
        if (n <= 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    /**
     * This method reverses a given string.
     *
     * @param str The string to be reversed.
     * @return The reversed string
     */
    public String reverseString(String str) {
        StringBuilder reversed = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }
        return reversed.toString();
    }

    /**
     * This method checks if a given number is prime.
     *
     * @param num The number to be checked.
     * @return True if the number is prime false otherwise.
     */
    public boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * This method generates a random number between a given range.
     *
     * @param min The minimum value of the range (inclusive).
     * @param max The maximum value of the range (inclusive)
     * @return A random number within the given range.
     */
    public int generateRandomNumber(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }

    // ... continue with more random methods ...

    /**
     * This is the main method that serves as an entry point for the program.
     *
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {
        RandomClass randomObj = new RandomClass();
        randomObj.sayHello();
        int factorialResult = randomObj.factorial(5);
        System.out.println("Factorial of 5: " + factorialResult);
        String reversedString = randomObj.reverseString("Hello");
        System.out.println("Reversed string: " + reversedString);
        boolean isPrimeNumber = randomObj.isPrime(17);
        System.out.println("Is 17 prime? " + isPrimeNumber);
        int randomNumber = randomObj.generateRandomNumber(1, 10);
        System.out.println("Random number between 1 and 10: " + randomNumber);
    }
}
