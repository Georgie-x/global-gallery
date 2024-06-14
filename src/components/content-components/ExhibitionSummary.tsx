import { ChangeEvent } from "react";

function ExhibitionSummary({
    handleExhibitionChange,
}: {
    handleExhibitionChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) {
    return (
        <section className='exhibition-summary'>
            <h2>Exhibition</h2>
            <div className='exhibition'>
                <select
                    className='select'
                    name='exhibition'
                    id='exhibition'
                    onChange={handleExhibitionChange}
                >
                    <option value='gallery'>Your Gallery</option>
                    <option value='aic'>Best of the Art Museum of Chicago</option>
                    <option value='rijks'>Best of Rijksmuseum</option>
                </select>
            </div>
        </section>
    )
}

export default ExhibitionSummary;