package com.bank.transaction.api;

import com.bank.transaction.service.TransactionService;
import com.bank.transaction.session.UserSession;
import com.bank.transaction.session.UserThreadLocalContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/session")
    public UserSession getSession(){
        return transactionService.getSession();

    }

    @PostMapping("/transfer")
    public String fundTransfer(@RequestParam BigDecimal receiverAmount, @RequestParam Long receiverAccountNumber){
        return transactionService.fundTransfer(receiverAmount, receiverAccountNumber);

    }
}
