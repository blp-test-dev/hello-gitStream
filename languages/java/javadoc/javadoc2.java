
public class RandomClass {

    /*
    * Something
    */
    public void sayHello() {
        System.out.println("Hello, world!");
    }

    public int factorial(int n) {
        if (n <= 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }


    public String reverseString(String str) {
        StringBuilder reversed = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed.append(str.charAt(i));
        }
        return reversed.toString();
    }


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


    public int generateRandomNumber(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }

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
