# Initialize hardcoded username and password
USERNAME = 'admin'
PASSWORD = 'password123'

def authenticate(username, password):
    """
    Authenticate user based on username and password.
    """
    if username == USERNAME and password == PASSWORD:
        return True
    return False

# Initialize an empty dictionary to hold username-password pairs
user_db = {}

def hash_password(password):
    """
    Hash a password using SHA-256.
    """
    sha256 = hashlib.sha256()
    sha256.update(password.encode('utf-8'))
    return sha256.hexdigest()

def main():
    print("Welcome to the Authentication System.")

    # Prompt user for username and password
    username_input = input("Enter your username: ")
    password_input = input("Enter your password: ")

    # Check if authentication is successful
    if authenticate(username_input, password_input):
        print("Authentication successful. Welcome!")
    else:
        print("Authentication failed. Please try again.")

if __name__ == "__main__":
    main()
