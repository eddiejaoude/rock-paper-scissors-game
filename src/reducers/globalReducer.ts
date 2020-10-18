export type ComputerChoice = "Rock" | "Paper" | "Scissor"
export type isWinner = "User" | "Computer" | "None"

export interface winner {
    Winner: isWinner;
    computerChoice: ComputerChoice
}
export type Action = {
    type: "Play";
    userChoice: ComputerChoice
}

export const isWinner: winner = {
    Winner: "User",
    computerChoice: "Rock"
}
export const globalReducer = (state: winner = isWinner, action: Action) => {
    const choices: ComputerChoice[] = ["Rock", "Paper", "Scissor"]
    switch (action.type) {
        case "Play":
            let decideComputerChoice = Math.floor(Math.random() * 3)
            state.computerChoice = choices[decideComputerChoice]
            state.Winner = choices[decideComputerChoice] === "Rock" && action.userChoice === "Rock" ? "None" : choices[decideComputerChoice] === "Rock" && action.userChoice === "Paper" ? "Computer" : choices[decideComputerChoice] === "Rock" && action.userChoice === "Scissor" ? "User" : choices[decideComputerChoice] === "Paper" && action.userChoice === "Paper"?"None":  choices[decideComputerChoice] === "Paper" && action.userChoice === "Scissor"?"Computer": choices[decideComputerChoice] === "Paper" && action.userChoice === "Rock"?"User":choices[decideComputerChoice] === "Scissor" && action.userChoice === "Scissor"?"None":choices[decideComputerChoice] === "Scissor" && action.userChoice === "Rock"?"Computer":choices[decideComputerChoice] === "Scissor" && action.userChoice === "Paper"?"User":"None"
            return state;

        default:
            return state;
    }
}