from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/api/date')
def get_dates():
    url = "https://www.hadithbd.com/date-time/fixed_date_time.php"
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    try:
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')

        # হিজরি তারিখ সংগ্রহ
        hijri_container = soup.find('div', id='hijriDateContainer')
        hijri_date = hijri_container.find('h4').text.strip() if hijri_container else ""

        # ইংরেজি ও বাংলা তারিখ সংগ্রহ
        english_date = ""
        bangla_date = ""
        
        # h4 এবং h5 ট্যাগ থেকে তারিখ খোঁজা
        for tag in soup.find_all(['h4', 'h5']):
            text = tag.text.strip()
            if 'বঙ্গাব্দ' in text:
                bangla_date = text
            elif 'ইং' in text:
                english_date = text.replace(' ইং', '')

        return jsonify({
            "english_date": english_date,
            "hijri_date": hijri_date,
            "bangla_date": bangla_date
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Vercel এর জন্য প্রয়োজনীয়
app.debug = True