"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getAgentRecommendation, FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="animate-spin" /> : <Wand2 />}
      Get Recommendation
    </Button>
  );
}

export function AgentInteractionSlide() {
  const [state, formAction] = useFormState(getAgentRecommendation, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Success!' && state.issues) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.issues.join('\n'),
      });
    }
  }, [state, toast]);


  return (
    <section className="h-full w-full flex flex-col justify-center items-center text-center p-8 sm:p-16 bg-background text-foreground">
      <h2 className="font-headline text-3xl sm:text-4xl mb-4 text-primary">Agent Selection Assistant</h2>
      <p className="text-lg text-secondary-foreground mb-6 max-w-2xl">
        Describe your automation needs, and our AI will recommend the best agent type and Google Cloud services to get started.
      </p>

      <Card className="w-full max-w-3xl text-left">
        <CardContent className="p-6">
          <form action={formAction} className="space-y-4">
            <Textarea
              name="automationNeeds"
              placeholder="e.g., 'I need to automate customer support by answering questions from our documentation and creating tickets in Jira if the question is not resolved...'"
              className="min-h-[100px]"
              required
            />
            <div className="flex justify-end">
                <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <div className="mt-6 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-accent">Recommendation</CardTitle>
                    <CardDescription>{state.data.agentTypeRecommendation}</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-accent">Google Cloud Services</CardTitle>
                    <CardDescription>{state.data.googleCloudServices}</CardDescription>
                </CardHeader>
            </Card>
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle className="font-headline text-accent">Configuration & Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-secondary-foreground whitespace-pre-wrap">{state.data.configurationDetails}</p>
                </CardContent>
            </Card>
        </div>
      )}
    </section>
  );
}
