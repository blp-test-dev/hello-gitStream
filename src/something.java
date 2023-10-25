import java.util.Random;
import java.util.Scanner;

public class TextRPG {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // Player setup
        System.out.println("Welcome to the Text RPG!");
        System.out.print("Enter your character's name: ");
        String playerName = scanner.nextLine();

        Player player = new Player(playerName);
        System.out.println("Welcome, " + player.getName() + "!");

        // Game loop
        while (player.isAlive()) {
            System.out.println("\n--- " + player.getName() + "'s Stats ---");
            System.out.println(player);

            int choice = showMainMenu(scanner);

            switch (choice) {
                case 1:
                    int damage = random.nextInt(10) + 1;
                    player.takeDamage(damage);
                    System.out.println("You were attacked by a monster and took " + damage + " damage!");
                    break;
                case 2:
                    player.heal(10);
                    System.out.println("You found a health potion and healed 10 HP!");
                    break;
                case 3:
                    System.out.println("You decided to rest and regain your strength.");
                    player.rest();
                    break;
                case 4:
                    System.out.println("Thanks for playing!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }

        System.out.println("Game over! " + player.getName() + " has been defeated.");
    }

    private static int showMainMenu(Scanner scanner) {
        System.out.println("\n--- Main Menu ---");
        System.out.println("1. Fight a monster");
        System.out.println("2. Use a health potion");
        System.out.println("3. Rest");
        System.out.println("4. Quit");
        System.out.print("Enter your choice: ");

        return scanner.nextInt();
    }
}

class Player {
    private String name;
    private int health;

    public Player(String name) {
        this.name = name;
        this.health = 100;
    }

    public String getName() {
        return name;
    }

    public int getHealth() {
        return health;
    }

    public boolean isAlive() {
        return health > 0;
    }

    public void takeDamage(int damage) {
        health -= damage;
        if (health < 0) {
            health = 0;
        }
    }

    public void heal(int amount) {
        health += amount;
        if (health > 100) {
            health = 100;
        }
    }

    public void rest() {
        health += 20;
        System.out.println("You rested and regained 20 HP!");
    }

    @Override
    public String toString() {
        return "Name: " + name + "\nHealth: " + health;
    }
}

import java.util.Random;
import java.util.Scanner;

public class TextRPG {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // Player setup
        System.out.println("Welcome to the Text RPG!");
        System.out.print("Enter your character's name: ");
        String playerName = scanner.nextLine();

        Player player = new Player(playerName);
        System.out.println("Welcome, " + player.getName() + "!");

        // Game loop
        while (player.isAlive()) {
            System.out.println("\n--- " + player.getName() + "'s Stats ---");
            System.out.println(player);

            int choice = showMainMenu(scanner);

            switch (choice) {
                case 1:
                    int damage = random.nextInt(10) + 1;
                    player.takeDamage(damage);
                    System.out.println("You were attacked by a monster and took " + damage + " damage!");
                    break;
                case 2:
                    player.heal(10);
                    System.out.println("You found a health potion and healed 10 HP!");
                    break;
                case 3:
                    System.out.println("You decided to rest and regain your strength.");
                    player.rest();
                    break;
                case 4:
                    System.out.println("Thanks for playing!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Try again.");
            }
        }

        System.out.println("Game over! " + player.getName() + " has been defeated.");
    }

    private static int showMainMenu(Scanner scanner) {
        System.out.println("\n--- Main Menu ---");
        System.out.println("1. Fight a monster");
        System.out.println("2. Use a health potion");
        System.out.println("3. Rest");
        System.out.println("4. Quit");
        System.out.print("Enter your choice: ");

        return scanner.nextInt();
    }
}

class Player {
    private String name;
    private int health;

    public Player(String name) {
        this.name = name;
        this.health = 100;
    }

    public String getName() {
        return name;
    }

    public int getHealth() {
        return health;
    }

    public boolean isAlive() {
        return health > 0;
    }

    public void takeDamage(int damage) {
        health -= damage;
        if (health < 0) {
            health = 0;
        }
    }

    public void heal(int amount) {
        health += amount;
        if (health > 100) {
            health = 100;
        }
    }

    public void rest() {
        health += 20;
        System.out.println("You rested and regained 20 HP!");
    }

    @Override
    public String toString() {
        return "Name: " + name + "\nHealth: " + health;
    }
}
