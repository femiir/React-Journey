import React from 'react'
import memes from '../memesData.jsx'

const Main = () => {

    const [allMemes, setAllMemes] = React.useState(memes)

    const [meme, Setmeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            memeImage: "https://i.imgflip.com/21uy0f.jpg"
        }
    )

    function getMemeImage() {

        const imageArray = allMemes.data.memes
        const randomNumber = imageArray[Math.floor(Math.random() * imageArray.length)]
        const url = randomNumber.url
        Setmeme(prevMeme => ({
            ...prevMeme,
            memeImage: url
        })
        )

    }

    function handleChange(event) {
        const { name, value } = event.target
        Setmeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        })
        )
    }


    return (
        <main className='main'>
            <div className='form--grid'>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Texts"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Texts"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <input onClick={getMemeImage} type="submit" name="" id="" value="memify 🖼️" />
            </div>
            <div className='meme--image'>
                <img className='form--image' src={meme.memeImage} alt="generated images" />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>

        </main>
    )
}

export default Main