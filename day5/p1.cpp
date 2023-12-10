#include <iostream>
#include <fstream>
#include <string>
#include <regex>

using namespace std;

vector<string> split(const string& str, char delimiter) {
    vector<string> result;
    string token;
    std::istringstream tokenStream(str);
    
    while (getline(tokenStream, token, delimiter)) {
        result.push_back(token);
    }
    
    return result;
}
xd

vector<string> readAndParseFile() {
    ifstream file("./test.txt");
    string line;
    vector<string> dump;
    while (getline(file, line)) {
        dump.push_back(line);
    }
    file.close();

    // parse this mess 
    string seeds = dump[0];
    cout << "seeds = " << seeds << endl;






    return dump;
}

int main() {
    vector<string> dump = readAndParseFile();
    for (string line : dump) {
        cout << "Line = " << line << endl;
    }
    return 0;
}