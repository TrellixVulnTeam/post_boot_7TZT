from django.shortcuts import render, get_object_or_404
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import Question, Choice

# Create your views here.
# get questions and display them
def index(request):
    lastest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': lastest_question_list}
    return render(request, 'polls/index.html', context)

# show specific questions and choices
def detail(request, question_id):
    try:
        question = Question.object.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404('Question Does not exist')
    return render(request, 'polls/details.html', {'question': question})

# get question and display results
def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/results.html', {'question': question})

#Vote for a question choice:
def vote(request, question_id):
    print(request.POST['choice'])
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except(KeyError,Choice.DoesNotExist):
        #Resdisplay the question voting form
        return render(request, 'polls/detail.html',{
            'question':question,
            'error_message': "you didnt make a choice",
        })
    else: 
        selected_choice +=1
        selected_choice.save()
    #always return a httpresponseredirect after a successfull fealing with post data
    # this prevents data from being posted twice if a user hits the back button
        return HttpResponseRedirect(reverse('polls: results', args=(question_id)))