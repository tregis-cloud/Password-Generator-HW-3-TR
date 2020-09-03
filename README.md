Project Title: Password-Generator-HW-3-TR
Description:This project generates a random password base on selecting atleast one of four character types and the length of the password.
Installation:NA

![Home](./images/home.png)
![Password](./images/password.png)

Usage:
The user must select a password length between 8 and 128. If the user does not, an error message will be presented and the program with terminate. Similarly, at least one of the four character types must be chosen, or the user will get an error message and the program will terminate. At the end of the selection of valid options, a random password will be generated.

Credits: The TA's are always helpful.

Test:
Test_1a, 1b - Password length: out of range -[7][129] - should get an error message and program terminates. (Pass)
Test-2a, 2b - Password length: no input -[none][cancel] - should get an error message and program terminates. (Pass)
Test-3a, 3b - All character types chosen [8] [128] - should get password with all character types. (Pass)
Test-4a, 4b - one character types chosen [8] [128] - should get password with selected character types. (Pass)
Test-5a, 5b - Two character types chosen [8] [128] - should get password with selected character types. (Pass)
Test-6a, 6b - Three character types chosen [8] [128] - should get password with selected character types. (Pass)
