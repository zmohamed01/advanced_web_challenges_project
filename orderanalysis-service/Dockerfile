FROM python:3.9-buster

WORKDIR /orderanalysis

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python","flask_connect.py"]