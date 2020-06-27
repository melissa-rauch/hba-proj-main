from twilio.rest import Client
import os

account_sid = os.environ["ACCOUNT_SID"]
auth_token = os.environ["AUTH_TOKEN"]
client = Client(account_sid, auth_token)

@app.route('/api/message')
def send_message(message):
    """Send a SMS to a Midwife"""
    data = request.get_json(force=True)

    message = client.messages \
                    .create(
                        body=data["body"],
                        from_='+12512500805',
                        to=data['to']
                    )

    return message.sid 