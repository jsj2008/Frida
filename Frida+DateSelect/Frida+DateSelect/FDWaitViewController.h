//
//  FDWaitViewController.h
//  Frida+DateSelect
//
//  Created by Martin Jensen on 27.05.13.
//  Copyright (c) 2013 Martin Jensen. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <SocketIO.h>

@interface FDWaitViewController : UIViewController <SocketIODelegate>
- (IBAction)didClickDelete:(id)sender;
@property (assign, nonatomic) BOOL isPresented;

@end
