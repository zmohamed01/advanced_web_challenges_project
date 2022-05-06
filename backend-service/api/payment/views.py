from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
import braintree



# Create your views here.
gateway = braintree.BraintreeGateway(
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id="589r5f7kbvvt9pyg",
        public_key="z7nnty5vn2vj2r7y",
        private_key="2c42805f3b5a5d8aece5974d26715d30"

    )
)
#validating user 
def validate_user_session(id,token):
    UserModel=get_user_model()

    try:
        user=UserModel.objects.get(pk=id)
        if user.session_token == token:
            return True
        return False
    except UserModel.DoesNotExist:
        return False



@csrf_exempt
def generate_token(request,id,token):
    if not validate_user_session(id,token):
     return JsonResponse({"error" : "Invalid session please login again"})
    else :
        return JsonResponse ({"clientToken":gateway.client_token.generate(), 'success' : True})


@csrf_exempt

def process_payment(request,id,token):
    if not validate_user_session(id,token):
        return JsonResponse({"error" : "Invalid session please login again"})

    nonce_from_the_client= request.POST["paymentMethodNonce"]
    amount_fom_the_client= request.POST['amount']

    result = gateway.transaction.sale({
    "amount": amount_fom_the_client,
    "payment_method_nonce": nonce_from_the_client,
    "options": {
      "submit_for_settlement": True}
                                     
    })

    if result.is_success:
        return JsonResponse({"success" : result.is_success, 'transcation':{ 'id' : result.transaction.id, 'amount': result.transaction.amount}})
    else:
        return JsonResponse({'error' : True , 'success' : False})    

    


