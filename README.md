# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    
        Functionality:

            The current CSV parser does not correctly handle commas in the CSV data. The parser currently splits the data at each new comma rather than following the convention of checking whether the data that contains the comma is wrapped in double quotes.

            The CSV is underspecified about what should occur when an empty set of strings or an empty field is input into one of the columns of the data. It currently makes the empty string a data point without alerting the user. 

        Extensibility:

            The function could alert the caller when an input does not match the field’s specifications according to the schema. Ex: alert the user that they cannot input a negative age.

            The function could skip empty lines so that they do not become empty arrays in the parsed output.


- #### Step 2: Use an LLM to help expand your perspective.

        submitted separately on google doc

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

        Functionality:
            1. As a user of the CSV parser, I can use CSV files that have data points that include the delimeter (in this case a comma) by putting the 
                text in quotes.
                    Both - This idea to allow commas in CSV data was one of my initial ideas that I brainstormed after reading the appendix in the handout, but it also appeared in each of my LLM requests. 
            2. As a user, I can leave empty fields in my CSV file that will be replaced by an empty string after being parsed so that my data is correctly aligned into the array it is parsed into.
                    Both - The LLM and I brainstormed different solutions on how to handle empty data fields and I landed on this as the best option.

        Extensibility 
            3. As a user, I can decide whether or not I would like to include headers as part of my CSV file, so that I can label my data without the     schema failing it.
                    The LLM - All three of my LLM requests suggested adding optional headers.
            4. As a user, I can use any delimeter of my choosing to separate my data to elimate frustration if the default delimeter is a symbol I use frequently.
                    The LLM - Multiple prompts had the LLM suggest allowing more delimeter freedom. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

        My initial ideas were to ensure the CSV parser is able to handle easily-overlooked symbols such as double quotes, commas, empty/new lines, and white space. The LLM suggested each of these along with enhancement options such as freedom for the user to choose their delimeter and headers while even suggesting options for scaling and memory usage. I noticed that changing my wording from features and improvements to stronger wording like limitations and enhancements changed the responses from being similar to my ideas to regarding memory, runtime, typescript and other performance issues. What resonated with me the most were the enhancements the LLM returned that I did not think of during my brainstrom. I was less interested when the LLM returned unrelated answers such as improved API structure or extensive comments. 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
    Samyak Jain (sjain80)
    Vivian Wang (vzwang)
    Oluwatomisola Idiaghe (oidiaghe)
    Paula Romero (psromero)

#### Total estimated time it took to complete project: 10 hours

#### Link to GitHub Repo:  https://github.com/cs0320-f25/typescript-csv-JacquelineC24 
