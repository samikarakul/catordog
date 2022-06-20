function Loading() {
  return (
    <div>
        <p>Loading...</p>
        <style jsx>
        {
        `
            div{
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                top: 0;
                left:0;
                background-color: black;
                opacity: .9;
                width: 100vw;
                height: 100vh;
                z-index: 1;
            }
            div p{
              z-index: 2;
              margin-bottom: 2vh;
              color: white;
            }
            div::after{
                content: "";
                display: block;
                width: 64px;
                height: 64px;
                margin: 8px;
                z-index: 2;
                border-radius: 50%;
                border: 6px solid #fff;
                border-color: #fff transparent #fff transparent;
                animation: rotate 2s linear infinite;
            }

            @keyframes rotate {
              0%{
                transform: rotate(0);
              }
              100%{
                transform: rotate(360deg);
              }
            }
        `
        }
        </style>
    </div>
  )
}

export default Loading