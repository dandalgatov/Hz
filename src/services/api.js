import axios from 'axios'

const apiKey = process.env.REACT_APP_AIRTABLE_KEY

const baseURL = "https://api.airtable.com/v0/app67oeILCiV8Nzfc/Table%201"

const config = {
  headers : {
    Authorization: `Bearer keyh1jKufHQOvL8EJ`,
  },
};

export const getAllHighScores = async () => {
  try {
    const res = await axios.get(baseURL, config)
    return res.data
  }catch (error) {
    console.error(error)
  }
}

export const setHighScore = async (form) => {
  try {
    const res = await axios.post(baseURL, {fields: form}, config);
    console.log(res)

  }catch (error) {
    console.error(error)
  }
} 