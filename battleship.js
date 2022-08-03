function play() {
    /* battlleship locations */
    const position = [0, 1, 1, 0, 1]
    let hitcount = 0
    let guesscount = 0
    while (hitcount != 3) {
        const choice = (parseInt(prompt('Enter a number between (1-5)')))

        if (choice < 0 || choice > 5) {
            alert('Enter a valid no')
            continue
        }
        /* increment the guess count by one */
        guesscount++

        if (position[choice - 1] == 1) {
            alert('You have hit a battleship')
            hitcount++
            position[choice - 1] = 2

        } else if (position[choice - 1] == 2) {
            alert('You have allready hit a battleship')

        } else {
            alert('You missed a battleship')
        }


    }
    alert('total guess :' + guesscount)
}

play()