import requests
import json
import os

# ✅ মোবাইলের স্টোরেজের ডাউনলোড ফোল্ডারে সংরক্ষণ
save_directory = "/storage/emulated/0/Download/hadith-books/book/1/hadith/"
os.makedirs(save_directory, exist_ok=True)  # ডিরেক্টরি তৈরি করুন (যদি না থাকে)

# ✅ বই ও অধ্যায়ের নম্বর (আপনার প্রয়োজন অনুযায়ী পরিবর্তন করুন)
book_id = 1
chapter_id = 4
base_url = f"https://api.topofstacksoftware.com/hadith/api/v2/book/{book_id}/chapter/{chapter_id}/hadiths"

# ✅ পেজ সেটআপ
page = 1
all_rows = []
total_hadith_count = 0

while True:
    url = f"{base_url}?page={page}&order=hadith_number"

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()  # HTTP error হ্যান্ডলিং
    except requests.exceptions.RequestException:
        print("❌ API কল করতে ব্যর্থ! ইন্টারনেট বা API ঠিক আছে কিনা চেক করুন।")
        break

    data = response.json()

    # ✅ যদি API থেকে কোনো হাদিস না আসে, তাহলে লুপ বন্ধ করুন
    if "data" not in data or "rows" not in data["data"] or not data["data"]["rows"]:
        print(f"✅ সকল {total_hadith_count} টি হাদিস সংগ্রহ সম্পন্ন।")
        break

    # ✅ শুধুমাত্র "rows" সংরক্ষণ করুন
    all_rows.extend(data["data"]["rows"])
    total_hadith_count += len(data["data"]["rows"])

    print(f"✅ Page {page}: {len(data['data']['rows'])} টি হাদিস সংগ্রহ হয়েছে (মোট: {total_hadith_count})")

    page += 1  # পরবর্তী পেজের জন্য ইনক্রিমেন্ট করুন

# ✅ **সকল হাদিস শুধুমাত্র Array হিসেবে সংরক্ষণ করুন**
chapter_file_path = os.path.join(save_directory, f"{chapter_id}.json")
with open(chapter_file_path, "w", encoding="utf-8") as f:
    json.dump(all_rows, f, ensure_ascii=False, indent=4)

# ✅ সংরক্ষণের মেসেজ (শুধুমাত্র ফাইলের নাম দেখাবে)
print(f"✅ ফাইল সংরক্ষিত হয়েছে: {chapter_file_path} (মোট {total_hadith_count} টি হাদিস)")