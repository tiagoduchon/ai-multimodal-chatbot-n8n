# Setup and verification notes

This is an **unhosted prototype**. The JSON was inspected structurally, but it has not been executed or validated against live Meta/OpenAI services here.

## Import and configure

1. Import `workflow.json` into n8n.
2. Reconnect OpenAI credentials for chat, audio transcription, and image analysis nodes.
3. Reconnect Instagram Graph API header authentication for the outbound HTTP Request node.
4. Review webhook endpoint, Meta app permissions, verification response, and event subscriptions.
5. Replace the placeholder sender ID in the `If` node with an appropriate test value; confirm the filter direction matches your intent.
6. Review the `Switch` expressions against actual inbound payloads and attachments.
7. Verify that each path reaches `Merge`, `Code in JavaScript`, and the AI Agent as intended.
8. Confirm memory session identifiers and error handling are suitable before production use.

## Test checklist

- [ ] Text message is recognized and passed to the agent.
- [ ] Audio is downloaded, converted, and transcribed.
- [ ] Image is downloaded, converted, and analyzed.
- [ ] JavaScript normalizes the resulting field.
- [ ] Agent uses the sample catalog and memory appropriately.
- [ ] Instagram API reply is delivered successfully.
- [ ] Failures and unsupported messages are handled gracefully.

## Known limitations

- No live deployment or end-to-end verification is provided.
- The original `If` node used a hardcoded sender identifier; it has been replaced with a placeholder.
- Credentials, webhook identifier, workflow metadata and environment identifiers have been removed from the public export.
- The JavaScript code uses overwrite precedence rather than combining multiple inputs.
- The original workflow contains Instagram-oriented nodes despite the export's WhatsApp filename; WhatsApp production integration is **not** demonstrated by this export.
- The sample real-estate listings are demo data inside the AI prompt, not a real property database.
