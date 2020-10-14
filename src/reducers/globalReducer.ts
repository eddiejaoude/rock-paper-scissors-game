export type ComputerChoice = "Rock" | "Paper" | "Scissor"

export interface winner {
    isWinner: boolean;
    computerChoice: ComputerChoice
}
export type Action = {
    type: "Play";
    userChoice:ComputerChoice
}

export const isWinner: winner = {
    isWinner: false,
    computerChoice: "Rock"
}
export const globalReducer = (state: winner = isWinner, action: Action) => {
    const choices: ComputerChoice[] = ["Rock", "Paper", "Scissor"]
    switch (action.type) {
        case "Play":
            let decideComputerChoice = Math.floor(Math.random() * 3)
            state.computerChoice = choices[decideComputerChoice]
            state.isWinner = choices[decideComputerChoice] === "Rock" ? true : false
            return state;

        default:
            return state;
    }
}