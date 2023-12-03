#include <iostream>
#include <fstream>
#include <string>

using namespace std;

vector<vector<char> > readFile() {
    ifstream file("./p1.txt");

    string line;
    vector<vector<char> > blueprint;
    while (getline(file, line)) {
        vector<char> current_line;
        for (char character : line) {
            current_line.push_back(character);
        }
        blueprint.push_back(current_line);
    }

    file.close();

    return blueprint;
}


int main() {
    //read file and create matrix
    vector<vector<char> > blueprint = readFile();

    





    return 0;
}

